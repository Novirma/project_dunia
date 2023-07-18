import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface premieredAttributes {
  premier_id?: string;
  name?: string;
}

@Table({ tableName: 'premiered', schema: 'bookmart_anime', timestamps: false })
export class premiered
  extends Model<premieredAttributes, premieredAttributes>
  implements premieredAttributes
{
  @Column({ allowNull: true, type: DataType.STRING(30) })
  premier_id?: string;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  name?: string;
}
