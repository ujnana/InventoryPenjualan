<template>
  <vuetable ref="vuetable"
    api-url="https://vuetable.ratiw.net/api/users"
    :fields="['Kode Transaksi', 'tanggal Transaksi', 'customer', 'item', 'qty', 'total diskon', 'total harga', 'total bayar']"
    data-path=""
    pagination-path=""
  ></vuetable>
</template>

<script>
import Vuetable from 'vuetable-2'

export default {
  components: {
    Vuetable
  }
}
</script>