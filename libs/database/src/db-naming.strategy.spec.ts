import { Table } from 'typeorm';

import { DBNamingStrategy } from './db-naming.strategy';

describe('DBNamingStrategy', () => {
  it("When call to primaryKeyName with test_table, ['id'] then return tt_id_pk", () => {
    expect(
      new DBNamingStrategy().primaryKeyName(new Table({ name: 'test_table' }), [
        'id',
      ]),
    ).toStrictEqual('tt_id_pk');
  });

  it("When call to primaryKeyName with  test_table, ['id', 'seq'] then return tt_id_seq_pk", () => {
    expect(
      new DBNamingStrategy().primaryKeyName(new Table({ name: 'test_table' }), [
        'id',
        'seq',
      ]),
    ).toStrictEqual('tt_id_seq_pk');
  });

  it("When call to uniqueConstraintName with test_table, ['id'] then return tt_id_uq", () => {
    expect(
      new DBNamingStrategy().uniqueConstraintName(
        new Table({ name: 'test_table' }),
        ['id'],
      ),
    ).toStrictEqual('tt_id_uq');
  });

  it("When call to uniqueConstraintName with  test_table, ['id', 'seq'] then return tt_id_seq_uq", () => {
    expect(
      new DBNamingStrategy().uniqueConstraintName(
        new Table({ name: 'test_table' }),
        ['id', 'seq'],
      ),
    ).toStrictEqual('tt_id_seq_uq');
  });

  it("When call to indexName with test_table, ['id'] then return tt_id_idx", () => {
    expect(
      new DBNamingStrategy().indexName(new Table({ name: 'test_table' }), [
        'id',
      ]),
    ).toStrictEqual('tt_id_idx');
  });

  it("When call to foreignKeyName with test_table, ['id', 'seq'] then return tt_id_seq_idx", () => {
    expect(
      new DBNamingStrategy().indexName(new Table({ name: 'test_table' }), [
        'id',
        'seq',
      ]),
    ).toStrictEqual('tt_id_seq_idx');
  });

  it("When call to relationConstraintName with test_table, ['id'] then return tt_id_rel", () => {
    expect(
      new DBNamingStrategy().relationConstraintName(
        new Table({ name: 'test_table' }),
        ['id'],
      ),
    ).toStrictEqual('tt_id_rel');
  });

  it("When call to relationConstraintName with test_table, ['id', 'seq'] then return tt_id_seq_rel", () => {
    expect(
      new DBNamingStrategy().relationConstraintName(
        new Table({ name: 'test_table' }),
        ['id', 'seq'],
      ),
    ).toStrictEqual('tt_id_seq_rel');
  });

  it("When call to foreignKeyName with test_table, ['id'] then return tt_id_fk", () => {
    expect(
      new DBNamingStrategy().foreignKeyName(new Table({ name: 'test_table' }), [
        'id',
      ]),
    ).toStrictEqual('tt_id_fk');
  });

  it("When call to foreignKeyName with test_table, ['id', 'seq'] then return tt_id_seq_fk", () => {
    expect(
      new DBNamingStrategy().foreignKeyName(new Table({ name: 'test_table' }), [
        'id',
        'seq',
      ]),
    ).toStrictEqual('tt_id_seq_fk');
  });
});
