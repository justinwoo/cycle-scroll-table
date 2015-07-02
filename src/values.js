import Cycle from '@cycle/core';

export var tableHeightBehavior = new Cycle.Rx.BehaviorSubject(500);
export var rowHeightBehavior = new Cycle.Rx.BehaviorSubject(30);
export var columnsBehavior = new Cycle.Rx.BehaviorSubject(['ID', 'ID * 10', 'Random Number']);
export var rowCountBehavior = new Cycle.Rx.BehaviorSubject(10000);
export var scrollTopBehavior = new Cycle.Rx.BehaviorSubject(0);
