<template>
  <div class="wrapper">
  <h2>Todo list</h2>
  <div v-if="todos.length > 0">
    <div class="status">
      <span class="complete">{{completedTodosCount}} todos completed</span>
      <span>{{inCompleteTodosCount}} todos not completed</span>
    </div>
    <div class="mark-all">
      <label>Toggle complete state of all items
        <input type="checkbox" name="markall" @click="toggleAll" :checked="areAllCompleted">
      </label>
    </div>
  </div>
    <form @submit.prevent="addTodo">
      <input type="text" name="todo" placeholder="Enter item" v-model="todo" v-validate="'required|min:5'" @focus="err = ''" />
      <transition name="alert-in" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
        <p class="alert-error" v-if="errors.has('todo')">{{ errors.first('todo')}}</p>
      </transition>   
    </form>
    <!-- <button @click="addTodo">Add todo</button> -->
    <span class="error" v-if="err" v-text="err"></span>
    
      <transition-group tag="ul" name="list" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <li v-for="(item, index) in todos" :key="index+1"> {{ item.name }} - {{ item.isComplete ? "completed" : "Not Completed"}}
        <input type="checkbox" name="complete" @click="toggleCompleted(index)" title="mark as complete" :checked="item.isComplete" />
        <i class="fa fa-minus-circle" title="remove item" @click="remove(index)"></i>
        </li>
      </transition-group>
    
    <p v-if="todos.length > 0">These are your todo items.</p>
    <p v-else>You have no todo. </p>
  </div>
</template>   
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Todo',
  data() {
    return {
      todo: "",
      err: ""
      /*todos : [
        {name: "Learn Vue", isComplete: false},
        {name: "Learn Vue-router", isComplete: false},
        {name: "Learn VueX", isComplete: false},
        {name: "Learn Vue-PWA", isComplete: false},
        {name: "Learn React", isComplete: false},
        {name: "Learn Redux", isComplete: false},
        {name: "Learn React-native", isComplete: false},
        {name: "Learn node", isComplete: false},
      ]*/
    }
  },
  computed:{
    todoById() {
      return this.$store.getters.getTodoByIndex(1);   //passing value to a getter in the store
    },
    ...mapGetters([
      'completedTodosCount', 'inCompleteTodosCount', 'areAllCompleted'
      ]),
    ...mapState({
      todos: 'todos'
    })
  }/*mapState(['todos']{
    //todos:(state) => state.todos
    todos: 'todos'
  })*/,
  methods: {
    addTodo() {
      this.$validator.validateAll().then((result) => {
        if(result) {
          //console.log(this.completedTodosCount);
          this.$store.commit("ADDTODO", this.todo);   //commit the mutation to store
          this.todo = '';  
        }else {
          this.err = "Todo item cannot be empty";
        }
      })
    },
    ...mapMutations([
      'REMOVETODO', 'TOGGLEALL'
    ]),
    ...mapActions([
      'toggleComplete'
      ]),
    toggleCompleted(index) {
      this.toggleComplete(index);
    },
    remove(index) {
      this.REMOVETODO(index);   //using mutations with mapMutations
    },
    toggleAll(e) {
      this.TOGGLEALL(e.target.checked);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
@import "./../assets/css/animate.min.css";*/
input[type='checkbox'] {
  transform: scale(2);
  width: 50px;
  outline: none;
}
.status {
  background: #3EB3F6;
  font-size: 1.2em;
  text-align: center;
}
.status span {
  display: inline-block;
  margin-right: 10px;
  color: red;
}
span.complete {
  color: #ffffff;
}
.mark-all {
  padding: 1em;
  background: #E0EDF4;
  font-weight: bold;
  font-size: 1.2em;
}
h2 {
  text-align: center;
  font-weight: bold;
  font-size: 1.7em;
  padding: 0.3em;
  margin: 0;
}
</style>
