export default function (csv_array){

    const arrayToCSV = (arr) => {
        return arr.map(row => row.join(',')).join('\n');
    };

    var csvString = arrayToCSV(csv_array);
    csvString=  '\ufeff'+csvString; // 添加 BOM

    var blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'result.csv';

    document.body.appendChild(a);
    a.click();
}