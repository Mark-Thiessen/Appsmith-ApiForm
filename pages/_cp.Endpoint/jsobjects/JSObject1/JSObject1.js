export default {
  async run() {
		storeValue('ignoreUrlId',appsmith.URL.queryParams.id ? false : true);
  }
}