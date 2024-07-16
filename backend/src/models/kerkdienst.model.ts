import {RowDataPacket} from 'mysql2';

export default interface Kerkdienst extends RowDataPacket {
  id?: number;
  datumTijd?: Date;
  notities?: string;
}
