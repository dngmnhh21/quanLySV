//prototype là lớp đối tượng trong  js
var sinhVien = function(){
    // khai báo các thuộc tính
    this.maSV = '';
    this.tenSV = '';
    this.loaiSV = '';
    this.diemToan = '';
    this.diemLy = '';
    this.diemHoa = '';
    this.diemTrungBinh = function(){
        var dtb = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa))/3;
        return dtb;
    }
}