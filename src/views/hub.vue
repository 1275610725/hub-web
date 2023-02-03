<template>
    <el-container>
        <el-header>

            <el-row type="flex" class="row-bg">
                <el-col :span="24">
                    <div style="text-align: center; font-size: 30px" class="grid-content bg-purple">
                        大宝作业写完了吗
                    </div>
                </el-col>

                <el-col :span="4">
                    <div style="text-align: right; font-size: 16px" class="grid-content bg-purple">
                        <el-dropdown style="text-align: right; font-size: 16px">
                            <i class="el-icon-setting" style="margin-right: 15px"></i>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>1.写作业</el-dropdown-item>
                                <el-dropdown-item>2.打屁股</el-dropdown-item>
                                <el-dropdown-item>3.打脸</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        赵大宝
                    </div>
                </el-col>
            </el-row>
        </el-header>

        <el-container style="height: 900px; border: 0px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '3']" router>
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>三年级</template>
                        <el-menu-item-group>
                            <template slot="title">上册</template>
                            <el-menu-item index="/admin">数学</el-menu-item>
                            <el-menu-item index="1-2">语文</el-menu-item>
                            <el-menu-item index="1-3">英语</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="下册">
                            <el-menu-item index="1-4">数学</el-menu-item>
                            <el-menu-item index="1-5">语文</el-menu-item>
                            <el-menu-item index="1-6">英语</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>四年级</template>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
                <el-main>
                    <el-table :data="tableData">
                        <el-table-column prop="date" label="日期" width="140">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="120">
                        </el-table-column>
                        <el-table-column prop="address" label="地址">
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>


<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
</style>

<script>
export default {
    data() {
        const item = {
            date: '2016-05-02',
            name: '赵大宝',
            address: '快去写作业！！！'
        };
        return {
            tableData: Array(20).fill(item)
        }
    }
};
</script>