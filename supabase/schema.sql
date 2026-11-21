-- BF Lernakademie: einmal im Supabase SQL Editor ausführen
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default 'Feuerwehr-Azubi',
  daily_goal integer not null default 30 check (daily_goal between 5 and 480),
  created_at timestamptz not null default now()
);
create table if not exists public.progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  module_id text not null,
  correct integer not null check (correct >= 0),
  total integer not null check (total > 0 and correct <= total),
  created_at timestamptz not null default now()
);
create table if not exists public.study_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  minutes integer not null check (minutes > 0),
  created_at timestamptz not null default now()
);
create table if not exists public.study_rooms (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text default '',
  created_by uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
create table if not exists public.room_members (
  room_id uuid not null references public.study_rooms(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key(room_id,user_id)
);

alter table public.profiles enable row level security;
alter table public.progress enable row level security;
alter table public.study_sessions enable row level security;
alter table public.study_rooms enable row level security;
alter table public.room_members enable row level security;

drop policy if exists "profile own read" on public.profiles;
create policy "profile own read" on public.profiles for select using (auth.uid() = id);
drop policy if exists "profile own insert" on public.profiles;
create policy "profile own insert" on public.profiles for insert with check (auth.uid() = id);
drop policy if exists "profile own update" on public.profiles;
create policy "profile own update" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);

drop policy if exists "progress own read" on public.progress;
create policy "progress own read" on public.progress for select using (auth.uid() = user_id);
drop policy if exists "progress own insert" on public.progress;
create policy "progress own insert" on public.progress for insert with check (auth.uid() = user_id);

drop policy if exists "sessions own read" on public.study_sessions;
create policy "sessions own read" on public.study_sessions for select using (auth.uid() = user_id);
drop policy if exists "sessions own insert" on public.study_sessions;
create policy "sessions own insert" on public.study_sessions for insert with check (auth.uid() = user_id);

-- Gruppen sind für angemeldete Nutzer sichtbar, damit ein Raumcode zum Beitreten funktioniert.
drop policy if exists "rooms authenticated read" on public.study_rooms;
create policy "rooms authenticated read" on public.study_rooms for select to authenticated using (true);
drop policy if exists "rooms authenticated create" on public.study_rooms;
create policy "rooms authenticated create" on public.study_rooms for insert to authenticated with check (auth.uid() = created_by);
drop policy if exists "rooms creator delete" on public.study_rooms;
create policy "rooms creator delete" on public.study_rooms for delete using (auth.uid() = created_by);

drop policy if exists "members authenticated read" on public.room_members;
create policy "members authenticated read" on public.room_members for select to authenticated using (true);
drop policy if exists "members self join" on public.room_members;
create policy "members self join" on public.room_members for insert to authenticated with check (auth.uid() = user_id);
drop policy if exists "members self leave" on public.room_members;
create policy "members self leave" on public.room_members for delete using (auth.uid() = user_id);

grant usage on schema public to authenticated;
grant select, insert, update on public.profiles to authenticated;
grant select, insert on public.progress to authenticated;
grant select, insert on public.study_sessions to authenticated;
grant select, insert, delete on public.study_rooms to authenticated;
grant select, insert, delete on public.room_members to authenticated;
