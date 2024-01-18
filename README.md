## windowsフォルダ内
```
cd ~/dev/youtube/hooks_basic && code .
```

## github
https://github.com/okuyama-code/react-hooks-practice

## 参考youtube
https://www.youtube.com/watch?v=i_PRCwq-NuM&t=254s

## ブランチ それぞれにメモ付きのアプリがある
- usecontext
- useReducer


## useReducerの解説
```
const [state, dispatch] = useReducer(reducer, initialState);
```
useReducerフックは、Reactで状態管理を行うためのフックの一つです。このフックを使用すると、複雑な状態ロジックを持つコンポーネントの状態管理をより効果的に行うことができます。

useReducerは、第一引数に reducer 関数、第二引数に初期状態 (initialState) を受け取ります。

reducer 関数は、現在の状態 (state) とアクション (action) を受け取り、新しい状態を返す関数です。この関数は、switch ステートメントや条件分岐を使って、アクションの種類に応じて適切な状態の更新を行います。アクションの種類によって異なる処理を実行することができます。

initialState は、コンポーネントが初めてレンダリングされたときに使われる初期の状態です。この例では、savings プロパティが 100000 という初期残高で初期化されています。

useReducer フックを実行すると、戻り値として [state, dispatch] という配列が返されます。state は現在の状態を表し、dispatch はアクションを発行するための関数です。

このようにして、useReducer フックを用いて状態管理を行うことで、コンポーネント内での複雑な状態変更ロジックをより整理された形で扱うことができます。アクションの発生によって reducer 関数が呼ばれ、新しい状態が計算され、それがコンポーネントの再レンダリングにつながります。

state は、useReducer フックによって管理される現在の状態を表します。具体的には、この例での state は Bank コンポーネント内で管理される状態オブジェクトであり、State 型で定義されたプロパティを持っています。

この例では、State 型が以下のように定義されています：

```tsx
type State = {
  savings: number;
}
```
したがって、state は savings というプロパティを持つオブジェクトです。具体的な状態の例としては、初期状態が { savings: 100000 } であるとき、state は { savings: 100000 } のような形になります。

アプリケーションが進行するにつれて、useReducer フックが呼び出され、reducer 関数によって新しいアクションに基づいた状態が計算され、state がその新しい状態に更新されます。アクションがディスパッチされるたびに、状態が変更され、その変更が反映された新しい state がコンポーネント内で利用可能になります。

state.savings は savings プロパティの値を取得します。例えば、{ savings: 100000 } という状態の場合、state.savings は 100000 という値になります。この値は、Reactコンポーネント内で状態の変化に基づいて表示を更新するなどの目的で使用されます。
