<template>
    <div class="w-full p-4 mt-8 text-right md:ml-4 rounded-2xl bg-indigo-900 md:mt-0">
          <form ref="form" @submit.prevent="sendEmail">
                <input class="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" v-model="name" type="text" placeholder="Name"><br>
                <input class="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" v-model="email" type="text" placeholder="Email"><br>
                <textarea class="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message" v-model="message" type="text" placeholder="Message"></textarea><br>
                <center><input type="submit" value="Send" class="px-5 py-2 font-bold rounded-lg cursor-pointer bg-haiti-700 hover:bg-haiti-500" /></center>
          </form>
      </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'EmailForm',
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_z1uurti', 'template_do36qzk', this.$refs.form, 'xx-G8RLGLMEEZt5LR').then((response) => {
        console.log('Success', response.status, response.text);
        this.$notify('Email sent');
      }).catch((error) => {
        console.log('Error', error);
        this.$notify({ type: 'error', text: 'Email not sent' });
      });

      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
</script>
