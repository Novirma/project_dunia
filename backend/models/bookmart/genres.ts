import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface genresAttributes {
  genre_id?: string;
  name_genre?: string;
  information?: string;
}

@Table({ tableName: 'genres', schema: 'bookmart_anime', timestamps: false })
export class genres
  extends Model<genresAttributes, genresAttributes>
  implements genresAttributes
{
  @Column({ allowNull: true, type: DataType.STRING(30) })
  genre_id?: string;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  name_genre?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  information?: string;
}
