// 存放所有的接口地址
export default { 
    baseUrl:'http://localhost:3000',    //接口网址
    // 菜单管理
    menuinfoUrl:'/api/menuinfo',//获取菜单1条
    menuaddUrl:'/api/menuadd',//菜单添加
    menulistUrl:'/api/menulist',//菜单列表
    menueditUrl:'/api/menuedit',//修改
    menudeleteUrl:'/api/menudelete',//删除


    // 角色管理
    roleinfoUrl:'/api/roleinfo',//获取角色1条
    roleaddUrl:'/api/roleadd',//角色添加
    rolelistUrl:'/api/rolelist',//角色列表
    roleeditUrl:'/api/roleedit',//修改
    roledeleteUrl:'/api/roledelete',//删除


    // 管理员
    userlistUrl:'/api/userlist',  //管理员列表
    usercountUrl:'/api/usercount',//管理员总数
    userloginUrl:'/api/userlogin',//管理员登录
    useraddUrl:'/api/useradd', //管理员添加
    usereditUrl:'/api/useredit',//管理员修改
    userdeletUrl:'/api/userdelete',//管理员删除
    usrinfoUrl:'/api/userinfo',//获取管理员1条


    //商品分类
    catelistUrl:'/api/catelist',//商品分类列表
    cateinfoUrl:'/api/cateinfo',//获取商品信息
    cateaddUrl:'/api/cateadd',//商品添加
    cateeditUrl:'/api/cateedit', //商品分类编辑
    catedeletUrl:'/api/catedelete',//商品删除


    //商品规格
    specslistUrl:'/api/specslist',//列表信息
    specsaddUrl:'/api/specsadd',//商品规格添加
    specscountUrl:'/api/specscount',//商品规格总数
    specslistUrl:'/api/specslist',//商品规格列表
    specsinfoUrl:'/api/specsinfo',//商品规格信息(1条)
    specseditUrl:'/api/specsedit',//商品规格修改
    specsdeleteUrl:'/api/specsdelete',//商品规格删除

    //商品管理
    goodslistUrl:'/api/goodslist',//商品列表
    goodsaddUrl:'/api/goodsadd',//商品添加
    goodslistUrl:'/api/goodslist',//商品列表(分页)
    goodsinfoUrl:'/api/goodsinfo',//商品获取(一条)
    goodseditUrl:'/api/goodsedit',//商品修改
    goodsdeleteUrl:'/api/goodsdelete',//商品删除
    goodscountUrl:'/api/goodscount',//分页
    

    //会员管理
    memberlistUrl:'/api/memberlist',//列表
    memberinfoUrl:'/api/memberinfo',//会员获取(1条)
    membereditUrl:'/api/memberedit',//修改

     //轮播图管理
     banneraddUrl:'/api/banneradd',//轮播图添加
     bannerlistUrl:'/api/bannerlist',//列表
     bannerinfoUrl:'/api/bannerinfo',//轮播图获取（一条）
     bannereditUrl:'/api/banneredit',//修改
     bannerdeleteUrl:'/api/bannerdelete',//删除

 

    //限时秒杀
    seckilladdUrl:'/api/seckadd',//添加
    seckilllistUrl:'/api/secklist',//列表
    seckillinfoUrl:'/api/seckinfo',//获取信息(1条)
    seckilleditUrl:'/api/seckedit',//修改
    seckilldeleteUrl:'/api/seckdelete',//删除
    
    
}