var sinhVien = { //scope
    maSV:1,
    tenSV:'Nguyễn Văn A',
    loaiSV:'Khó khăn',
    diemToan:1,
    diemLy:2,
    diemHoa:3,
    tinhDiemTrungBinh : function (){
        var dtb = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa))/3;
        return dtb;
    },
    xepLoai : function(){
        
    }
}



//truy xuất giá trị thuộc tính đối tượng
//có 2 cách
//cách 1: [ten_doi_tuong].[ten_thuoc_tinh]
//cách 2: [ten_doi_tuong][ten_thuoc_tinh]