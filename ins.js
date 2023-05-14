var aut = 'Brahim'
        const { createApp } = Vue

        createApp({
            data() {
                return {
                    show: false,
                    title: 'the title is bla',
                    author: aut,
                    age: 23
                }
            },
            methods: {
                chanegeName(titl) {
                    this.author = titl;
                    console.log("you clicked ");
                },
                showOrmask() {
                    if (this.show)
                        this.show = false
                    else
                        this.show = true
                },
                handLe(){
                    console.log('hendel');
                },
                leave(){
                    console.log('leave')
                },
                double(){
                    console.log('event')
                }
            }
            // template:'<h1>hello i am brahim</h1>'

        }).mount('#app')