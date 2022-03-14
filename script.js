const app = new Vue({
    el: '#root',
    data: {
        addTodos:'',
        newTodo: '',
        todos: [
            'lavare',
            'pulire',
            'asciugare',
        ]
    },
    methods: {
        deletetodo(index) {
            this.todos.slice(index, 1);
        },
        addtodos() {
            //il trim()toglie gli spazzi prima e dopo dalla stringa.
            if (this.newTodo.trim() != '') {
                this.todos.push(this.newTodo.trim());
                this.newTodos = '';
            }
        }
    }
});