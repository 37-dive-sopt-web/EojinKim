import { members } from './members.js';

// 초기 데이터 설정
if (!localStorage.getItem('membersData')) {
  localStorage.setItem('membersData', JSON.stringify(members));
}

let data = JSON.parse(localStorage.getItem('membersData'));

const tableBody = document.querySelector('#memberTable tbody');
const applyBtn = document.querySelector('#apply');
const deleteBtn = document.querySelector('#deleteSelected');
const addBtn = document.querySelector('#addMember');
const selectAll = document.querySelector('#selectAll');
const modal = document.querySelector('#modal');
const modalBackdrop = document.querySelector('#modalBackdrop');
const closeModal = document.querySelector('#closeModal');
const modalForm = document.querySelector('#modalForm');
const filterForm = document.querySelector('#filter-form');

// 테이블 렌더링
function renderTable(list) {
  tableBody.innerHTML = '';

  if (list.length === 0) {
    // 데이터가 없을 경우
    noDataMessage.classList.remove('hidden');
    return;
  }

  // 데이터가 있을 경우
  noDataMessage.classList.add('hidden');

  list.forEach((m) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input type="checkbox" class="row-check" data-id="${m.id}" /></td>
      <td>${m.name}</td>
      <td>${m.englishName}</td>
      <td><a href="https://github.com/${
        m.github
      }" target="_blank" class="link">${m.github}</a></td>
      <td>${m.gender === 'female' ? '여자' : '남자'}</td>
      <td>${m.role}</td>
      <td>${m.codeReviewGroup}</td>
      <td>${m.age}</td>`;
    tableBody.appendChild(tr);
  });
}

// 페이지 진입 시 초기 렌더링
renderTable(data);

// 필터링
applyBtn.addEventListener('click', (e) => {
  const name = document.querySelector('#name').value.trim().toLowerCase();
  const englishName = document
    .querySelector('#englishName')
    .value.trim()
    .toLowerCase();
  const github = document.querySelector('#github').value.trim().toLowerCase();
  const gender = document.querySelector('#gender').value;
  const role = document.querySelector('#role').value;
  const group = document.querySelector('#codeReviewGroup').value.trim();
  const age = document.querySelector('#age').value.trim();

  const filtered = data.filter((m) => {
    const matchName = !name || m.name.toLowerCase().includes(name);
    const matchEnglishName =
      !englishName || m.englishName.toLowerCase().includes(englishName);
    const matchGithub = !github || m.github.toLowerCase().includes(github);
    const matchGender = !gender || m.gender === gender;
    const matchRole = !role || m.role === role;
    const matchGroup = !group || String(m.codeReviewGroup) === group;
    const matchAge = !age || String(m.age) === age;

    return (
      matchName &&
      matchEnglishName &&
      matchGithub &&
      matchGender &&
      matchRole &&
      matchGroup &&
      matchAge
    );
  });

  renderTable(filtered);
});

// 필터 초기화
filterForm.addEventListener('reset', () => {
  renderTable(data);
});

// 선택 삭제
deleteBtn.addEventListener('click', () => {
  const checked = document.querySelectorAll('.row-check:checked');
  const ids = Array.from(checked).map((c) => Number(c.dataset.id));
  data = data.filter((m) => !ids.includes(m.id));
  localStorage.setItem('membersData', JSON.stringify(data));
  renderTable(data);
});

// 전체 선택/해제
selectAll.addEventListener('change', (e) => {
  document.querySelectorAll('.row-check').forEach((c) => {
    c.checked = e.target.checked;
  });
});

// 개별 체크박스 변경 시 전체 선택 상태 업데이트
tableBody.addEventListener('change', (e) => {
  if (e.target.classList.contains('row-check')) {
    const all = document.querySelectorAll('.row-check');
    const checked = document.querySelectorAll('.row-check:checked');
    selectAll.checked = all.length === checked.length;
  }
});

// 모달 열기/닫기
addBtn.addEventListener('click', () => modal.classList.remove('hidden'));
closeModal.addEventListener('click', () => modal.classList.add('hidden'));
modalBackdrop.addEventListener('click', () => modal.classList.add('hidden'));

// 멤버 추가
modalForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#modalName').value.trim();
  const englishName = document.querySelector('#modalEnglishName').value.trim();
  const github = document.querySelector('#modalGithub').value.trim();
  const gender = document.querySelector('#modalGender').value;
  const role = document.querySelector('#modalRole').value;
  const group = document.querySelector('#modalCodeReviewGroup').value.trim();
  const age = document.querySelector('#modalAge').value.trim();

  if (!name || !englishName || !github || !gender || !role || !group || !age) {
    alert('모든 항목을 입력해주세요!');
    return;
  }

  const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;

  const newMember = {
    id: newId,
    name,
    englishName,
    github,
    gender,
    role,
    codeReviewGroup: Number(group),
    age: Number(age),
  };

  data.push(newMember);
  localStorage.setItem('membersData', JSON.stringify(data));
  renderTable(data);
  modalForm.reset();
  modal.classList.add('hidden');
});
