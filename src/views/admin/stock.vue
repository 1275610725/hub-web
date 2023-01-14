<template>
  <div class="main-content">
    <div class="main-content-inner">
      <div class="page-content">
        <div class="row">
          <div class="col-xs-12">
            <!-- PAGE CONTENT BEGINS -->
            <div class="row">
              <div class="col-xs-12">
                <h3 class="header smaller lighter blue">股票详情</h3>
                <p>
                  <button @click="list()" class="btn btn-white btn-default btn-round">
                    <i class="ace-icon fa fa-refresh"></i>
                    刷新
                  </button>
                </p>
                <table id="simple-table" class="table  table-bordered table-hover">
                  <thead>
                  <tr>
                    <th>股票名称</th>
                    <th>股票价格</th>
                    <th class="hidden-480">Clicks</th>

                    <th>
                      <i class="ace-icon fa fa-clock-o bigger-110 hidden-480"></i>
                      Change
                    </th>
                    <th class="hidden-480">Status</th>

                    <th></th>
                  </tr>
                  </thead>

                  <tbody>
                  <tr v-for="stock in stocks">
                    <td>{{stock.name}}</td>
                    <td>¥{{stock.currentPrice}}</td>
                    <td class="hidden-480">3,330</td>
                    <td>{{stock.change}}</td>

                    <td class="hidden-480">
                      <span class="label label-sm label-warning">Expiring</span>
                    </td>

                    <td>
                      <div class="hidden-sm hidden-xs btn-group">
                        <button class="btn btn-xs btn-success">
                          <i class="ace-icon fa fa-check bigger-120"></i>
                        </button>

                        <button class="btn btn-xs btn-info">
                          <i class="ace-icon fa fa-pencil bigger-120"></i>
                        </button>

                        <button class="btn btn-xs btn-danger">
                          <i class="ace-icon fa fa-trash-o bigger-120"></i>
                        </button>

                        <button class="btn btn-xs btn-warning">
                          <i class="ace-icon fa fa-flag bigger-120"></i>
                        </button>
                      </div>

                      <div class="hidden-md hidden-lg">
                        <div class="inline pos-rel">
                          <button class="btn btn-minier btn-primary dropdown-toggle"
                                  data-toggle="dropdown" data-position="auto">
                            <i class="ace-icon fa fa-cog icon-only bigger-110"></i>
                          </button>

                          <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                            <li>
                              <a href="#" class="tooltip-info" data-rel="tooltip"
                                 title="View">
																			<span class="blue">
																				<i class="ace-icon fa fa-search-plus bigger-120"></i>
																			</span>
                              </a>
                            </li>

                            <li>
                              <a href="#" class="tooltip-success" data-rel="tooltip"
                                 title="Edit">
																			<span class="green">
																				<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>
																			</span>
                              </a>
                            </li>

                            <li>
                              <a href="#" class="tooltip-error" data-rel="tooltip"
                                 title="Delete">
																			<span class="red">
																				<i class="ace-icon fa fa-trash-o bigger-120"></i>
																			</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div><!-- /.span -->
            </div><!-- /.row -->
            <!-- PAGE CONTENT ENDS -->
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.page-content -->
    </div>
  </div><!-- /.main-content -->
</template>

<script>
export default {
  name: "finance-stock",
  data:function (){
    return{
      stocks: []
    }
  },
  methods:{
    list(){
      let _this = this
      _this.$ajax.get(process.env.VUE_APP_SERVER + "/service/stock/list").then((respond) => {
        _this.stocks = respond.data
      })
    }
  }
}
</script>

<style scoped>

</style>