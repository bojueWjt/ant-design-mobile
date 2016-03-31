/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { List, CheckboxItem, Button, WingBlank, WhiteSpace } from '../../index.js';
import { createForm } from 'rc-form';

let CheckboxExample = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Page title="Checkbox" subtitle="&lt;CheckboxItem /&gt;">
        <List >
          <List.Body>
            <CheckboxItem
              {...getFieldProps('f1', {
                initialValue: false,
                valuePropName: 'checked'
              })}
              extra="额外信息"
            >使用优惠</CheckboxItem>
            <CheckboxItem
              {...getFieldProps('f2', {
                initialValue: true,
                valuePropName: 'checked'
              })}
            >默认选择</CheckboxItem>
            <CheckboxItem
              disabled={true}
              {...getFieldProps('f3', {
                initialValue: false,
                valuePropName: 'checked'
              })}
              name="f3"
            >disabled</CheckboxItem>
          </List.Body>
        </List>
        <CheckboxItem
          mode="agree"
          {...getFieldProps('f4', {
            initialValue: false,
            valuePropName: 'checked'
          })}
          name="f4"
        >同意<a href="http://www.alipay.com" target="_blank">《信用支付服务合同》</a>
        </CheckboxItem>
        <CheckboxItem
          disabled={true}
          mode="agree"
          {...getFieldProps('f5', {
            initialValue: true,
            valuePropName: 'checked'
          })}
          name="f5"
        >强制选中,无法取消勾选<a href="http://www.alipay.com" target="_blank">《信用支付服务合同》</a>
        </CheckboxItem>
        <WhiteSpace mode={12}/>
        <div className="button-container">
          <WingBlank>
            <Button onClick={this.onClick}>Submit</Button>
          </WingBlank>
        </div>
      </Page>
    );
  },
});

CheckboxExample = createForm()(CheckboxExample);

export default CheckboxExample;
