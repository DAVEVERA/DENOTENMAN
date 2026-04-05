-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. PRODUCTS TABLE
create table products (
  id bigint primary key,
  name text not null,
  slug text not null unique,
  category text not null,
  category_label text,
  image text,
  description text,
  base_price numeric(10, 2) not null,
  unit text,
  badge text,
  origin text,
  weights jsonb,
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. VARIANTS TABLE
create table product_variants (
  id uuid default uuid_generate_v4() primary key,
  product_id bigint references products(id) on delete cascade not null,
  variant_id text not null,
  name text not null,
  price numeric(10, 2) not null,
  image text,
  sku text,
  stock_status text default 'in_stock',
  stock_label text default 'Op voorraad',
  unique(product_id, variant_id)
);

-- 3. WEIGHTS TABLE
create table product_weights (
  id uuid default uuid_generate_v4() primary key,
  product_id bigint references products(id) on delete cascade not null,
  label text not null,
  grams integer not null,
  price numeric(10, 2) not null,
  unique(product_id, grams)
);

-- 4. ORDERS TABLE
create table orders (
  id uuid default uuid_generate_v4() primary key,
  stripe_payment_intent_id text unique not null,
  amount_total integer not null,
  customer_email text,
  customer_name text,
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  items jsonb
);

-- RLS POLICIES
alter table products enable row level security;
alter table product_variants enable row level security;
alter table product_weights enable row level security;
alter table orders enable row level security;

create policy "Public products are viewable by everyone."
  on products for select
  using ( true );

create policy "Public variants are viewable by everyone."
  on product_variants for select
  using ( true );

create policy "Public weights are viewable by everyone."
  on product_weights for select
  using ( true );
