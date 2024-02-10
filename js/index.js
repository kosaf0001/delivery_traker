const delivery = [
  { code: "04", name: "CJ대한통운" },
  { code: "01", name: "우체국택배" },
  { code: "05", name: "한진택배" },
  { code: "08", name: "롯데택배" },
  { code: "06", name: "로젠택배" },
  { code: "54", name: "홈픽" },
  { code: "24", name: "GS25편의점택배" },
  { code: "46", name: "CU 편의점택배" },
  { code: "23", name: "경동택배" },
  { code: "22", name: "대신택배" },
  { code: "11", name: "일양로지스" },
  { code: "32", name: "합동택배" },
  { code: "18", name: "건영택배" },
  { code: "17", name: "천일택배" },
  { code: "20", name: "한덱스" },
  { code: "16", name: "한의사랑택배" },
  { code: "12", name: "EMS" },
  { code: "25", name: "TNT Express" },
  { code: "14", name: "UPS" },
  { code: "21", name: "Fedex" },
  { code: "26", name: "USPS" },
  { code: "34", name: "i-Parcel" },
  { code: "37", name: "LX판토스" },
  { code: "28", name: "GSMNtoN" },
  { code: "38", name: "ECMS Express" },
  { code: "30", name: "KGL네트웍스" },
  { code: "40", name: "굿투럭" },
  { code: "45", name: "우리택배(구호남택배)" },
  { code: "41", name: "GSI Express" },
  { code: "44", name: "SLX택배" },
  { code: "47", name: "우리한방택배" },
  { code: "52", name: "세방" },
  { code: "57", name: "Cway Express" },
  { code: "60", name: "YJS글로벌(영국)" },
  { code: "51", name: "성원글로벌카고" },
  { code: "62", name: "홈이노베이션로지스" },
  { code: "63", name: "은하쉬핑" },
  { code: "66", name: "Giant Network Group" },
  { code: "64", name: "FLF퍼레버택배" },
  { code: "53", name: "농협택배" },
  { code: "65", name: "YJS글로벌(월드)" },
  { code: "67", name: "디디로지스" },
  { code: "69", name: "대림통운" },
  { code: "70", name: "LOTOS CORPORATION" },
  { code: "43", name: "애니트랙" },
  { code: "72", name: "성훈물류" },
  { code: "71", name: "IK물류" },
  { code: "81", name: "제니엘시스템" },
  { code: "84", name: "스마트로지스" },
  { code: "87", name: "이투마스(ETOMARS)" },
  { code: "85", name: "풀앳홈" },
  { code: "82", name: "컬리넥스트마일" },
  { code: "88", name: "큐런택배" },
  { code: "89", name: "두발히어로" },
  { code: "91", name: "하이브시티" },
  { code: "94", name: "카카오T당일배송" },
  { code: "93", name: "팬스타국제특송(PIEX)" },
  { code: "92", name: "지니고 당일배송" },
  { code: "99", name: "롯데글로벌로지스" },
  { code: "100", name: "나은물류" },
  { code: "101", name: "한샘서비스원 택배" },
  { code: "102", name: "배송하기좋은날 (SHIPNERGY)" },
  { code: "103", name: "NDEX KOREA" },
  { code: "104", name: "도도플렉스(dodoflex)" },
  { code: "105", name: "브릿지로지스㈜" },
  { code: "106", name: "허브넷로지스틱스" },
  { code: "108", name: "MEXGLOBAL" },
  { code: "49", name: "A.C.E EXPRESS INC" },
  { code: "113", name: "썬더히어로" },
  { code: "112", name: "1004홈" },
  { code: "114", name: "㈜캐나다쉬핑" },
  { code: "110", name: "부릉" },
  { code: "117", name: "YUNDA EXPRESS" },
  { code: "120", name: "발렉스 특수물류" },
  { code: "109", name: "파테크해운항공" },
  { code: "119", name: "핑퐁" },
  { code: "121", name: "바바바(bababa)" },
  { code: "122", name: "BAIMA EXPRESS" },
  { code: "123", name: "엔티엘피스" },
  { code: "124", name: "LTL" },
  { code: "125", name: "GTS 로지스" },
  { code: "126", name: "㈜올타코리아" },
  { code: "128", name: "판월드로지스틱㈜" },
  { code: "95", name: "큐익스프레스" },
  { code: "130", name: "로지스파트너" },
  { code: "131", name: "딜리래빗" },
  { code: "132", name: "지오피" },
  { code: "134", name: "에이치케이홀딩스" },
  { code: "135", name: "HTNS" },
  { code: "13", name: "DHL" },
  { code: "138", name: "라스트마일" },
  { code: "141", name: "인터로지스" },
  { code: "142", name: "탱고앤고" },
  { code: "140", name: "직구문" },
  { code: "143", name: "투데이" },
  { code: "144", name: "큐브플로우(CUBEFLOW)" },
  { code: "145", name: "현대글로비스" },
  { code: "146", name: "국제로지스틱(KSE)" },
  { code: "147", name: "에스더쉬핑" },
  { code: "148", name: "ARGO" },
  { code: "149", name: "골드스넵스" },
  { code: "151", name: "GNG(자이언트)" },
  { code: "152", name: "(주)엠티인터내셔널" },
  { code: "153", name: "(주)이지로지스틱" },
  { code: "154", name: "KT EXPRESS" },
  { code: "155", name: "hy" },
  { code: "157", name: "우진인터로지스" },
  { code: "116", name: "팀프레시" },
  { code: "160", name: "와이드테크" },
  { code: "167", name: "딜리박스" },
  { code: "168", name: "이스트라" },
  { code: "165", name: "서림물류" },
  { code: "163", name: "(주)위니온로지스" },
  { code: "170", name: "유피로지스" },
  { code: "171", name: "올인닷컴" },
]
const map = {};
for (const d of delivery) {
  map[d.name] = d.code;
}

document.addEventListener('DOMContentLoaded', function() {
  var accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(function(item) {
      var header = item.querySelector('.accordion-header');
      var content = item.querySelector('.accordion-content');

      header.addEventListener('click', function() {
          content.classList.toggle('active');
      });
  });
});

let rows; 
let passportKey = '';
let sheetName;

function readExcel() {
  let input = event.target;
  let reader = new FileReader();
  reader.onload = function () {
    let data = reader.result;
    let workBook = XLSX.read(data, { type: 'binary' });
    workBook.SheetNames.forEach(function (sheetName) {
      sheetName = sheetName;
      rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
      console.log(JSON.stringify(rows));
    })
  };
  reader.readAsBinaryString(input.files[0]);
}

function onChangeKey(key) {
  passportKey = key;
}

async function call(code, invoice) {
  const response = await fetch(`https://s.search.naver.com/n/csearch/ocontent/util/headerjson.naver?callapi=parceltracking&t_code=${code}&t_invoice=${invoice}&passportKey=${passportKey}`, {
    method: 'GET'
  })
  const data = await response.json();
  return data;
}

function s2ab(s) {
  var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
  var view = new Uint8Array(buf);  //create uint8array as viewer
  for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
  return buf;
}

function exportExcel(excelHandler) {
  // step 1. workbook 생성
  var wb = XLSX.utils.book_new();

  // step 2. 시트 만들기 
  var newWorksheet = excelHandler.getWorksheet();

  // step 3. workbook에 새로만든 워크시트에 이름을 주고 붙인다.  
  XLSX.utils.book_append_sheet(wb, newWorksheet, excelHandler.getSheetName());

  // step 4. 엑셀 파일 만들기 
  var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

  // step 5. 엑셀 파일 내보내기 
  saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), excelHandler.getExcelFileName());
}

async function onclickbutton() {
  if (rows == undefined) {
    alert("파일을 추가해주세요.")
    return;
  }

  if (passportKey === '') {
    alert("passportKey를 추가하세요.");
    return;
  }

  const data = [
    ['택배사', '송장번호', '상태']
  ];

  for (const row of rows) {
    const company = row['택배사'];
    const invoice = row['송장번호'];

    const d = await call(map[company], invoice);
    const lastDetail = d.lastDetail.kind;

    data.push([company, invoice, lastDetail])
  }

  const excelHandler = {
    getExcelFileName: function () {
      return `${new Date()}.xlsx`;
    },
    getSheetName: function () {
      return sheetName;
    },
    getExcelData: function () {
      return data;
    },
    getWorksheet: function () {
      return XLSX.utils.aoa_to_sheet(this.getExcelData());
    }
  }
  exportExcel(excelHandler);
}