<template>
 <div id="login">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-5 offset-xl-4">
                <div class="card mt-5">
                    <div class="card-header">
                        <img src="../assets/friends-g7ecf65acf_1920.jpg" class="img-fluid">
                        <h1 class="text-center">Anmelden</h1>
                            <div class="card-body">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                     <div class="form-floating">
                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                                        <label for="floatingPassword">Password</label>
                                    </div>
                                <button class="w-100 btn btn-lg btn-primary" type="button" v-on:click="login()">Login</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>

/*   <div class="form-inputs">
        <input type="text" id="username" name="username" v-model="input.username" placeholder="Username" />
        <label for="username">Username/Email address</label>
    </div>
    <div class="form-inputs">
        
        <input type="password" id="password" name="password" v-model="input.password" placeholder="Password" />
        <label for="password">Password</label>
    </div> */

<script>
export default {
    name: 'Login',
    data() {
        return {
            input: {
                username: "",
                password:""
            }
        }
    },
    methods: {
        login() {
            
        }
    }
};
</script>

<style scoped>
</style>