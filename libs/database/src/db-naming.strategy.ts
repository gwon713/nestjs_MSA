import { DefaultNamingStrategy, NamingStrategyInterface, Table } from 'typeorm';

export class DBNamingStrategy
  extends DefaultNamingStrategy
  implements NamingStrategyInterface
{
  primaryKeyName(tableOrName: Table | string, columnNames: string[]): string {
    let table: string =
      tableOrName instanceof Table ? tableOrName.name : tableOrName;
    table = table.split('.').pop();
    table = table
      .split('_')
      .map((x) => x.charAt(0))
      .join('');
    const columnSnakeCase: string = columnNames.join('_');
    return `${table}_${columnSnakeCase}_pk`;
  }

  uniqueConstraintName(
    tableOrName: Table | string,
    columnNames: string[],
  ): string {
    let table: string =
      tableOrName instanceof Table ? tableOrName.name : tableOrName;
    table = table.split('.').pop();
    table = table
      .split('_')
      .map((x) => x.charAt(0))
      .join('');
    const columnSnakeCase: string = columnNames.join('_');
    return `${table}_${columnSnakeCase}_uq`;
  }

  indexName(
    tableOrName: Table | string,
    columns: string[],
    // where?: string,
  ): string {
    let table: string =
      tableOrName instanceof Table ? tableOrName.name : tableOrName;
    table = table.split('.').pop();
    table = table
      .split('_')
      .map((x) => x.charAt(0))
      .join('');
    const columnSnakeCase: string = columns.join('_');
    return `${table}_${columnSnakeCase}_idx`;
  }

  relationConstraintName(
    tableOrName: Table | string,
    columnNames: string[],
    // where?: string,
  ): string {
    let table: string =
      tableOrName instanceof Table ? tableOrName.name : tableOrName;
    table = table.split('.').pop();
    table = table
      .split('_')
      .map((x) => x.charAt(0))
      .join('');
    const columnSnakeCase: string = columnNames.join('_');
    return `${table}_${columnSnakeCase}_rel`;
  }

  foreignKeyName(
    tableOrName: Table | string,
    columnNames: string[],
    // referencedTablePath?: string,
    // referencedColumnNames?: string[],
  ): string {
    let table: string =
      tableOrName instanceof Table ? tableOrName.name : tableOrName;
    table = table.split('.').pop();
    table = table
      .split('_')
      .map((x) => x.charAt(0))
      .join('');
    const columnSnakeCase: string = columnNames.join('_');
    return `${table}_${columnSnakeCase}_fk`;
  }
}
