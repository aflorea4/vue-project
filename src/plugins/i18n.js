export default {
    install: (app, options) => {
      // inject a globally available $translate() method
      app.config.globalProperties.$translate = (key) => {
        key = window.localStorage.getItem('lang') + '.' + key
        // retrieve a nested property in `options`
        // using `key` as the path
        return key.split('.').reduce((o, i) => {
          if (o) return o[i]
        }, options)
      }
    }
  }