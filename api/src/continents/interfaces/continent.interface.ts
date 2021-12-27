import { Document } from "mongoose";

export interface Continent extends Document {
    code: string;
    name: string;
}