import React, { Component } from "react";

export default class Todo extends Component {

    /* stateの初期化 */
    constructor(props) { // クラス内で"最初"に呼び出されるメソッド
        super(props);    // 親クラスのコンストラクタを呼び出す
        this.state = {   // コンポーネントの状態
            todos: [],   // todoリスト
            name: ''     // 名前を保持する
        }
    }

    /* 入力された時に呼び出されるイベントハンドラ */
    onInput = (e) => {
        this.setState({ // コンポーネントの状態を更新する
            name: e.target.value // 値を取得する
        });
    }

    addTodo = () => {
        const { todos, name } = this.state;
        this.setState({
            todos: [...todos, name]
        });
    }

    removeTodo = (index) => {
        const { todos, name } = this.state;
        this.setState({
            todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
        });
    }

    /* UIを描画するために使用されるメソッド */
    render() {
        const { todos } = this.state;

        return (
            <div> {/* 要素やコンテンツをまとめる */}
                <input type="text" onInput={this.onInput} />
                <button onClick={this.addTodo} >登録</button>
                <ul> {/* リストを定義する */}
                    {/* 'todos'配列内の各要素をループして、リスト形式で表示する */}
                    {todos.map((todo, index) => <li key={index}>
                        {todo}
                        <button onClick={ () => {this.removeTodo(index)}}>削除</button>
                    </li>)}
                </ul>
            </div>
        );
    }
}