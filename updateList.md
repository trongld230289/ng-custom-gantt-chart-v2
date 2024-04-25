# Gantt chart overview
### Contributor:
1. Trong
2. Son
## 1. Overview:
## 2. Main Structure:
| Name | Meaning |
|---|---|
| class | gantt conpoments |
| init function | Init context (ctx), mount, created, update component, emit event to update component | 
| options props | Contain props info and parent dom node (target) |
| instance props | Contain component logic (ex: $set, update, eventDispatcher, ect.)
| create_fragment | Created and implement component life cycle (c: create, m: mount, d: destroyed, p: updated) |

## 3. TSS Custom Obj:
```javascript
var StelteGanttScopeHolder = 
/* Created global var to holding our custom scope, expected that existed 1 instance on entired app. */
{ 
	displayedTasks: [], // Custom task life cycle and improve performance
	displayedTaskRows: [], // Improve performance
	tableElement: /*{div0, div6}*/ {}, // Used to update week calculator.
	onRowSelected$: new BehaviorSubject(null), // Used to emit data (from clicked row) into our App 
	customGanttConfig: { // Contain our custom config when init app but dont impact with main gantt flow
		selectedRowHeaderColor: 'transparent' // Used to set row header color when clicked.
	}
};
```

```javascript
function BehaviorSubject(data) {
    /* BehaviorSubject same as rxjs, not a copy, just recover by my knowleage */
	/* private */ this.prevData = null;
	/* private */ this.data = data;
	/* private */ this.listener = null,
	/* public */ this.subscribe = function (callback) {
		this.listener = callback;
		return this;
	};
	/* public */ this.next = function (data) {
		this.prevData = this.data;
		this.data = data;
		if (this.listener) {
			const data = {
				current: this.data,
				prev: this.prevData
			}
			this.listener(data);
		}
	};
	/* public */ this.unsubscribe = function () {
		this.listener = null;
	};
	/* public */ this.value = function () {
		return this.data;
	};
	/* public */ this.prevValue = function () {
		return this.prevData;
	};
};
```
## List updated:
1. Update task didMount, unMount.
2. Update Performance render task, task-row.
3. Update week calculator when change date model.
4. Update Gantt row on click task-row.
## Deploy
1. Merge code into master
2. Adjust version in package.json
3. run ```npm pubplish```

