import { column, Schema, Table } from "@powersync/web";

const patterns = new Table(
  {
    // id column (text) is automatically included
    created_at: column.text,
    user_id: column.text,
    name: column.text,
    emoji: column.text,
    order_index: column.integer,
    is_holiday: column.integer,
    is_all_day: column.integer,
    start_at: column.text,
    end_at: column.text,
    next_day_pattern_id: column.text,
  },
  { indexes: {} }
);

const shifts = new Table(
  {
    // id column (text) is automatically included
    created_at: column.text,
    user_id: column.text,
    name: column.text,
    emoji: column.text,
    is_holiday: column.integer,
    is_all_day: column.integer,
    start_at: column.text,
    end_at: column.text,
    notes: column.text,
  },
  { indexes: {} }
);

const profiles = new Table(
  {
    // id column (text) is automatically included
    created_at: column.text,
    name: column.text,
    slug: column.text,
    avatar_url: column.text,
    user_id: column.text,
  },
  { indexes: {} }
);

export const AppSchema = new Schema({
  patterns,
  shifts,
  profiles,
});

export type Database = (typeof AppSchema)["types"];
