<template>
    <div class="header">
        <img class="logo" src="../../assets/index-logo.png" alt="logo">
        <div class="logo">后台管理系统</div>
        <div class="user-info">
            <screen-full class="screen-full"></screen-full>
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../../static/img/img.jpg">
                    {{username}}
                    <i class="el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">游览网站</el-dropdown-item>
                    <el-dropdown-item command="loginout">个人设置</el-dropdown-item>
                    <el-dropdown-item command="loginout">修改密码</el-dropdown-item>
                    <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    import screenFull from '../Screenfull/index'

    export default {
        data() {
            return {
                name: '明明'
            }
        },
        components: {
            screenFull
        },
        computed: {
            username() {
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods: {
            handleCommand(command) {
                if (command == 'loginout') {
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }

    .header .logo {
        float: left;
        width: 200px;
        height: 100%;
    }

    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }

    .user-info .el-dropdown-link {
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }

    .user-info .user-logo {
        position: absolute;
        left: 0;
        top: 15px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .el-dropdown-menu__item {
        text-align: center;
    }
    .screen-full{
        position: absolute;
        right: 150px;
    }
</style>
