Vue.component("cominput",{
    props:["title"],
    template:`<div class="select-input">
<input type="text" @focus="focus" v-model="title">
</div>`,
    methods:{
        focus(){
            this.$emit("changestatus");
        }
    }

});
Vue.component("comlist",{
    props:['comlistData','state'],
    template:`<ul class="select-list" v-show="state==true">
<li v-for="item in comlistData" @click="click(item.title)">{{item.title}}</li>
</ul>`,
    methods:{
        click(val){
            this.$emit('changestatus',val);
        }
    }

});