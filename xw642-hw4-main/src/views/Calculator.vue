<template>
  <div class="test">
    <!-- TODO: Bootstrap grid + Bootstrap components -->
    <b-container style="min-width: 375px">
      <b-row style="height: 100px;">
        <b-col class="px-0 mx-0">
          <div class="test"> <h1>{{this.formula}}</h1> </div>
        </b-col>
        <b-col cols="3" class="px-0 mx-0">
            <b-button class="w-100 h-100 btn-warning" @click="backspace()">
              <h1>←</h1>
            </b-button>
        </b-col>
        <b-col cols="3" class="px-0 mx-0 ">
            <b-button class="w-100 h-100 btn-warning" @click="clear()">
              <h1>AC</h1>
            </b-button>
        </b-col>
      </b-row>

      <b-row style="height: 100px;">
        <b-col class="px-0 mx-0">
          <b-button class="w-100 h-100" @click="append(1)">
            <h1>1</h1>
          </b-button>
        </b-col>
        <b-col class="px-0 mx-0">
          <b-button class="w-100 h-100" @click="append(2)">
            <h1>2</h1>
          </b-button>
        </b-col>
        <b-col class="px-0 mx-0">
          <b-button class="w-100 h-100" @click="append(3)">
            <h1>3</h1>
          </b-button>
        </b-col>
        <b-col class="px-0 mx-0">
          <b-button class="w-100 h-100 btn-warning" @click="append('+')">
            <h1>+</h1>
          </b-button>
        </b-col>
      </b-row>
      <b-row style="height: 100px;">
        <b-col class="px-0 mx-0">
          <b-button class="w-100 h-100" @click="append(4)">
            <h1>4</h1>
          </b-button>
        </b-col>
        <b-col class="px-0 mx-0">
          <b-button class="w-100 h-100" @click="append(5)">
            <h1>5</h1>
          </b-button>
        </b-col>
        <b-col class="px-0 mx-0">
          <b-button class="w-100 h-100" @click="append(6)">
            <h1>6</h1>
          </b-button>
        </b-col>
        <b-col class="px-0 mx-0">
          <b-button class="w-100 h-100 btn-warning" @click="append('-')">
            <h1>-</h1>
          </b-button>
        </b-col>
      </b-row>
      <b-row style="height: 100px;">
        <b-col class="px-0 mx-0">
          <b-button class="w-100 h-100" @click="append(7)">
            <h1>7</h1>
          </b-button>
        </b-col>
        <b-col class="px-0 mx-0">
          <b-button class="w-100 h-100" @click="append(8)">
            <h1>8</h1>
          </b-button>
        </b-col>
        <b-col class="px-0 mx-0" >
          <b-button class="w-100 h-100" @click="append(9)">
            <h1>9</h1>
          </b-button>
        </b-col>
        <b-col class="px-0 mx-0">
          <b-button class="w-100 h-100 btn-warning" @click="append('*')">
            <h1>x</h1>
          </b-button>
        </b-col>
      </b-row>
      <b-row style="height: 100px;">
        <b-col class="px-0 mx-0">
          <b-button class="w-100 h-100" @click="append('.')">
            <h1>.</h1>
          </b-button>
        </b-col>
        <b-col class="px-0 mx-0">
          <b-button class="w-100 h-100" @click="append(0)">
            <h1>0</h1>
          </b-button>
        </b-col>
        <b-col class="px-0 mx-0">
          <b-button class="w-100 h-100 btn-warning" @click="evaluate(formula)">
            <h1>=</h1>
          </b-button>
        </b-col>
        <b-col class="px-0 mx-0">
          <b-button class="w-100 h-100 btn-warning" @click="append('/')">
            <h1>/</h1>
          </b-button>
        </b-col>

      </b-row>


    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formula: ''
    }
  },
  methods: {
    /*
     * FUNCTION: evaluate()
     * PARAMETERS: none
     * FUNCTIONALITY: evaluate() was already written by instructors.
     */
    evaluate() {
      try {
        /* WARNING! Never use eval in production code. */
        // eslint-disable-next-line no-eval
        let result = eval(this.formula)
        this.formulaAlert = false
        this.formula = result
      } catch (exception) {
        this.formulaAlert = true
      }
    },

    /*
     * FUNCTION: append()
     * PARAMETERS: value: Value to be appended to end of string.
     * FUNCTIONALITY: append() first checks to see if this.formula has been set.
     * If not, then it just replaces the value. If it has been set, it adds the
     * user input string (the button pressed) to the end of this.formula.
     */
    append(value) {
      if(this.formula.length<=20){
        this.formula=this.formula+value
      }


      // console.log(value);
      // TODO: append value to this.formula
    },
    clear(){
      this.formula=''
    },

    /*
     * FUNCTION: backspace()
     * PARAMETERS: none
     * FUNCTIONALITY: backspace() uses slice() to cut the last character off from
     * the string. It uses toString() to ensure that this.formula is a string
     * (otherwise this function would not work when deleting the last character
     * from a result).
     */
    backspace() {
      var str = this.formula.toString()
      str = str.slice(0, -1)
      this.formula = str

    }
  }
}
</script>

<style>
  .test{
    width:100%;
  }

</style>
