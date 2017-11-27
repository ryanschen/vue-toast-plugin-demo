import VueToast from './vue-toast.vue'

let Toast = {}
Toast.install = function (Vue, options) {
    var opt = {
        duration: 3000,
    }
    for(let key in options){
        opt[key] = options[key]
    }
    Vue.prototype.$toast = function (message, option, callback) {

        if(typeof option === 'object') {
            for(let key in option){
                opt[key] = option[key]
            }
        }else if(typeof option === 'function'){
            callback = option
        }

        const Toast = Vue.extend(VueToast)
        var instance = new Toast().$mount(document.createElement('div'))
        instance.message = message
        instance.visible = true
        document.body.appendChild(instance.$el)
        setTimeout(() => {
            instance.visible = false
            setTimeout(() => {
                document.body.removeChild(instance.$el);
                callback && callback()
            }, 500)
        }, opt.duration)
    };
    ['show', 'success', 'info', 'error'].forEach(element => {
        Vue.prototype.$toast[element] = function (message, option, callback) {
            Vue.prototype.$toast(message, option, callback)
        }
    });
}
if(typeof window !== 'undefined' && window.Vue){
    window.Vue.use(Toast)
}
export default Toast;