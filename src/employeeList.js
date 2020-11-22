import React from 'react'
import { connect } from "react-redux";
import { Table } from 'antd';

import 'antd/dist/antd.css';


class employeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        const { user } = this.props;
        const Columns = [
            {
                title: 'Id',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age'
            },
            {
                title: 'Gender',
                dataIndex: 'gender',
                key: 'gender'
            }, {
                title: 'Email',
                dataIndex: 'email',
                key: 'email'
            }, {
                title: 'Phone No',
                dataIndex: 'phoneNo',
                key: 'phoneNo'
            }
        ]
        return (
            <div className='table-div'>
                <h1>Employee List</h1>
                <Table
                    columns={Columns}
                    dataSource={user}
                    style={{ width: '80%', margin: '0 auto' }}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.Loginreducer.user
});

export default connect(mapStateToProps)(employeeList);