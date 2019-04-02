new Vue({
  el: '#app',
  data () {
    return {
      search: '',
      headers: [
        { text: 'Cuenta', sortable: false, value: 'cuenta' },
        { text: 'Mesa', sortable: false, value: 'mesa' },
        { text: 'Cliente', sortable: false, value: 'cliente' },
        { text: 'Mesero', sortable: false, value: 'mesero' },
        { text: 'Total', sortable: false, value: 'total' },
      ],
      tableData: [
        {
          cuenta: '78978',
          mesa: '1',
          cliente: 'Juan Perez',
          mesero: 'Maria Elena',
          total: '$45.00'
        },
        {
          cuenta: '123123',
          mesa: '2',
          cliente: 'Luis Morales',
          mesero: 'Maria Elena',
          total: '$4.00'
        },
        {
          cuenta: '7454',
          mesa: '3',
          cliente: 'Ronald Jacobo',
          mesero: 'Maria Elena',
          total: '$5.00'
        },
        {
          cuenta: '678',
          mesa: '4',
          cliente: 'Luis Perez',
          mesero: 'Maria Elena',
          total: '$40.00'
        },
        {
          cuenta: '123',
          mesa: '6',
          cliente: 'Maria Perez',
          mesero: 'Maria Elena',
          total: '$12.00'
        },
        {
          cuenta: '131231',
          mesa: '8',
          cliente: 'Carlos Enrriquez',
          mesero: 'Maria Elena',
          total: '$20.00'
        }
      ]
    }
  }
})
