import { RowDataPacket } from "mysql2"

export default interface Kerkdienst extends RowDataPacket {
  kerkdienst_ID?: number;
  datumTijd?: Date;
  notities?: string;
}