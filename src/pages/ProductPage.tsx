import {
    Avatar,
    Button,
    Form,
    Input,
    Modal,
    Select,
    Table,
    TableColumnsType,
  } from "antd";
  import { Component } from "react";
  
  interface Props {}
  
  interface State {
    showModal: boolean;
    name: string;
    price: number;
    stock: number;
    brand: string;
    thumbnail: string;
  }
  
  interface DataType {
    key: string;
    name: string;
    price: number;
    stock: number;
    brand: string;
    thumbnail: string;
  }
  
  interface FieldType {
    name: string;
    price: number;
    stock: number;
    brand: string;
    thumbnail: string;
  }
  
  const dataSource: DataType[] = [
    {
      key: "1",
      name: "Đồng hồ ELIO 40 mm Nam EL099-01",
      price: 288000,
      stock: 15,
      brand: "ELIO",
      thumbnail:
        "https://cdn.tgdd.vn/Products/Images/7264/242215/dong-ho-mvw-ms065-01-2-org.jpg",
    },
    {
      key: "2",
      name: "Đồng hồ CASIO 35 mm Nữ LTP-V002GL-7B3",
      price: 950000,
      stock: 20,
      brand: "CASIO",
      thumbnail:
        "https://cdn.tgdd.vn/Products/Images/7264/231860/elio-el036-01-nu-2-org.jpg",
    },
    {
      key: "3",
      name: "Đồng hồ CITIZEN 42 mm Nam BM7100-59E",
      price: 3200000,
      stock: 10,
      brand: "CITIZEN",
      thumbnail:
        "https://cdn.tgdd.vn/Products/Images/7264/296126/mvw-ml075-03-nam-1.jpg",
    },
    {
      key: "4",
      name: "Đồng hồ SEIKO 44 mm Nam SSB349P1",
      price: 5500000,
      stock: 8,
      brand: "SEIKO",
      thumbnail:
        "https://cdn.tgdd.vn/Products/Images/7264/202674/orient-ra-ag0005l10b-nam-co-tu-dong-5-org.jpg",
    },
    {
      key: "5",
      name: "Đồng hồ ORIENT 40.5 mm Nam RA-AC0F02S10B",
      price: 4500000,
      stock: 5,
      brand: "ELIO",
      thumbnail:
        "https://cdn.tgdd.vn/Products/Images/7264/275058/orient-ra-aa0b05r19b-1.jpg",
    },
  ];
  
  const columns: TableColumnsType<DataType> = [
    {
      key: "thumbnail",
      title: "Hình ảnh",
      dataIndex: "thumbnail",
      render(value, record) {
        return <Avatar src={value} size={56} />;
      },
    },
    {
      key: "name",
      title: "Tên sản phẩm",
      dataIndex: "name",
    },
    {
      key: "brand",
      title: "Thương hiệu",
      dataIndex: "brand",
      filters: [
        {
          text: "Hãng ELIO",
          value: "ELIO",
        },
        {
          text: "Hãng CASIO",
          value: "CASIO",
        },
        {
          text: "Hãng CITIZEN",
          value: "CITIZEN",
        },
        {
          text: "Hãng SEIKO",
          value: "SEIKO",
        },
      ],
      onFilter(value, record) {
        return record.brand.includes(value as string);
      },
    },
    {
      key: "price",
      title: "Đơn giá",
      dataIndex: "price",
      align: "right",
      sorter: {
        compare: (a, b) => a.price - b.price, // tăng dần
      },
    },
    {
      key: "stock",
      title: "Số lượng",
      dataIndex: "stock",
      align: "right",
      sorter: {
        compare: (a, b) => b.stock - a.stock, // giảm dần
      },
    },
  ];
  
  export default class ProductPage extends Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = {
        showModal: false,
        name: "",
        brand: "ELIO",
        price: 0,
        stock: 0,
        thumbnail: "",
      };
    }
  
    showModal = () => {
      this.setState({
        showModal: true,
      });
    };
  
    cancelModal = () => {
      this.setState({
        showModal: false,
      });
    };
  
    onFinish = () => {
      console.log(this.state);
    };
  
    render() {
      return (
        <div>
          <Button type="primary" onClick={this.showModal}>
            Tạo sản phẩm
          </Button>
          <Modal
            title="Basic Modal"
            open={this.state.showModal}
            onCancel={this.cancelModal}
            footer={null}
          >
            <Form onFinish={this.onFinish} autoComplete="off" layout="vertical">
              <Form.Item<FieldType>
                label="Tên sản phẩm"
                name={"name"}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên sản phẩm",
                  },
                ]}
              >
                <Input
                  placeholder="Tên sản phẩm"
                  value={this.state.name}
                  onChange={(e) =>
                    this.setState({
                      name: e.target.value,
                    })
                  }
                />
              </Form.Item>
  
              <Form.Item<FieldType>
                label="Đơn giá"
                name={"price"}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập đơn giá",
                  },
                ]}
              >
                <Input
                  type="number"
                  min={1000}
                  placeholder="Đơn giá (VND)"
                  value={this.state.price}
                  onChange={(e) =>
                    this.setState({
                      price: Number(e.target.value),
                    })
                  }
                />
              </Form.Item>
  
              <Form.Item<FieldType>
                label="Số lượng"
                name={"stock"}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng số lượng sản phẩm",
                  },
                ]}
              >
                <Input
                  type="number"
                  min={0}
                  placeholder="Số lượng"
                  value={this.state.stock}
                  onChange={(e) =>
                    this.setState({
                      stock: Number(e.target.value),
                    })
                  }
                />
              </Form.Item>
  
              <Form.Item<FieldType>
                label="Thương hiệu"
                name={"brand"}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn thương hiệu",
                  },
                ]}
              >
                <Select
                  defaultValue={this.state.brand}
                  onChange={(value) => this.setState({ brand: value })}
                >
                  <Select.Option value="ELIO">ELIO</Select.Option>
                  <Select.Option value="CASIO">CASIO</Select.Option>
                  <Select.Option value="CITIZEN">CITIZEN</Select.Option>
                  <Select.Option value="SEIKO">SEIKO</Select.Option>
                </Select>
              </Form.Item>
  
              <Form.Item<FieldType>
                label="Hình ảnh"
                name={"thumbnail"}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn hình ảnh",
                  },
                ]}
              >
                <Input
                  placeholder="https://...."
                  value={this.state.thumbnail}
                  onChange={(e) =>
                    this.setState({
                      thumbnail: e.target.value,
                    })
                  }
                />
              </Form.Item>
  
              <Form.Item wrapperCol={{ span: 24 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  style={{ width: "100%" }}
                >
                  Tạo mới
                </Button>
              </Form.Item>
            </Form>
          </Modal>
          <Table dataSource={dataSource} columns={columns} />
        </div>
      );
    }
  }
  