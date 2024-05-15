import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { schema } from "./schema";
import { Resource } from "sst";

const secret = Resource.MySecret.value;
const sql = neon(secret);
export const db = drizzle(sql, { schema });
