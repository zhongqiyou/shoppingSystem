<template>
   <div>
        <Sider
         :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}"  
         >
            <Menu active-name="/user" theme="dark" width="auto" :open-names="['1']" @on-select="onGetIndex" >
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        用户身份
                    </template>
                    <MenuItem name="/user">审核用户</MenuItem>
                    <MenuItem name="/adopt">已通过</MenuItem>
                    <MenuItem name="/failed">未通过</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                       报价列表
                    </template>
                    <MenuItem name="/offer_innert">添加</MenuItem>
                    <MenuItem name="/offer_update">更新</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                       报料列表
                    </template>
                    <MenuItem name="/report_delete">删除</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <div>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                    </div>
                </Breadcrumb>
                <Card>
                    <div style="height: 600px">
                      Content{{tabIndex}}
                       <router-view></router-view> 
                    </div>
                </Card>
            </Content>
        </Layout>
   </div>
</template>

<script>
export default {
  data(){
    return {
      bool:true , 
      tabIndex:0
    }
  },
  methods:{
    onGetIndex(e){
       console.log(e);
      this.tabIndex = e;
      this.$router.push(e);
      
    }
  }
}
</script>

<style lang="sass" scoped>

</style>