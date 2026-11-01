-- Run this in Supabase: SQL Editor > New query
create table if not exists public.leads (
  id         uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name  text not null check (char_length(full_name) between 2 and 120),
  email      text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  phone      text not null check (char_length(phone) between 7 and 25),
  service    text,
  message    text check (char_length(message) <= 2000),
  source     text not null default 'contact'
);

alter table public.leads enable row level security;

-- Visitors may only INSERT. Nobody can read leads with the anon key.
create policy "Anyone can submit a lead"
  on public.leads for insert to anon with check (true);
