module.exports = {
  networks: {
    live: {
      host: "localhost",
      port: 8546,
      network_id: '1', // main-net
      gasPrice: 15000000000
    },
    priv: {
      host: "localhost",
      port: 8546,
      network_id: '50', // main-net
      gasPrice: 5000000000
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4500000
    }
  },
  test_directory: 'transpiled/test',
  migrations_directory: 'transpiled/migrations',
};
