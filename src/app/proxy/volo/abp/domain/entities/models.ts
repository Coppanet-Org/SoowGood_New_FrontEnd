
export interface AggregateRoot<TKey> extends BasicAggregateRoot<TKey> {
  extraProperties: Record<string, object>;
  concurrencyStamp?: string;
}

export interface BasicAggregateRoot<TKey> extends Entity {
}

export interface Entity {
}
