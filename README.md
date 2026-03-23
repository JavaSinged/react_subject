# 📚 강의 목록 관리 시스템 (Lecture List System)

React와 Spring Boot를 연동하여 사용자의 조건에 따라 실시간으로 강의 데이터를 필터링하고 정렬하는 풀스택 웹 애플리케이션입니다.

---

## 🛠️ 기술 스택

### 1. Frontend

- **Library**: `React`
- **Communication**: `Axios`
- **Styling**: `CSS Modules`, `CSS Variables` (Global Theme)

### 2. Backend

- **Framework**: `Spring Boot 3.x`
- **Language**: `Java 17`
- **ORM/Mapper**: `MyBatis`
- **Database**: `Oracle / MySQL` (SQL Mapper 기반)
- **Port**: `8989`

---

## ✨ 주요 기능

### 1. 통합 검색 및 필터링

- **검색**: 강의명(`SUBJECT_TITLE`)을 키워드로 검색하며, SQL의 `LOWER` 함수를 사용해 대소문자 구분 없이 결과를 도출합니다.
- **카테고리 분류**: 프론트엔드(1), 백엔드(2), DB(3) 중 선택하여 특정 분야의 강의만 조회가 가능합니다.
- **난이도 필터**: 초급, 중급, 고급 단계별 필터링 기능을 제공합니다.

### 2. 다중 조건 정렬 (Sorting)

- 사용자의 선택에 따라 5가지 정렬 기준을 동적으로 적용합니다.
  - **작성순** (기본값)
  - **난이도순** (낮은순 / 높은순)
  - **수강인원순** (많은순 / 적은순)

### 3. UI/UX

- **검색 조건 초기화**: `Reset` 버튼 클릭 시 모든 검색어와 필터 상태(`State`)가 즉시 기본값으로 돌아가며 전체 목록을 자동 재호출합니다.
- **시각적 차별화**: 카테고리별 전용 **배지(Badge)** 디자인을 적용하여 데이터의 직관적인 구분을 지원합니다.

---

## 📂 프로젝트 구조

### 🔹 Frontend (`/src`)

- `App.jsx`: 모든 상태(State) 관리, Axios 통신 로직 및 통합 검색바 UI
- `App.module.css`: Flexbox 기반의 한 줄 정렬 검색바 및 레이아웃 디자인
- `App.css`: `:root`를 이용한 공통 컬러 변수 및 글로벌 스타일 정의
- `component/SubjectList.jsx`: 강의 목록 테이블 렌더링 및 조건부 배지 출력 담당
- `component/SubjectList.module.css`: 테이블 중앙 정렬 및 카테고리별 포인트 컬러 정의

### 🔹 Backend (`/java`)

- `SubjectController.java`: `@RequestParam`을 통한 4가지 검색 조건 수집 및 API 제공
- `SubjectMapper.xml`: `<where>`, `<if>` 태그를 활용한 쿼리 작성

---

## 💾 데이터베이스 구조 (`SUBJECT_TBL`)

| 컬럼명                 | 타입        | 설명                            |
| :--------------------- | :---------- | :------------------------------ |
| **SUBJECT_NO**         | NUMBER (PK) | 강의 일련번호                   |
| **SUBJECT_TITLE**      | VARCHAR2    | 강의명 (키워드 검색 대상)       |
| **SUBJECT_INSTRUCTOR** | VARCHAR2    | 담당 강사                       |
| **SUBJECT_CATEGORY**   | NUMBER      | 카테고리 (1:프론트, 2:백, 3:DB) |
| **SUBJECT_LEVEL**      | NUMBER      | 난이도 (1:초급, 2:중급, 3:고급) |
| **SUBJECT_COUNT**      | NUMBER      | 현재 수강 인원                  |

---

## 🔗 API 명세

### 📡 강의 목록 조회 (Search & Filter)

- **Method**: `GET`
- **URL**: `http://localhost:8989/subjects`
- **Query Parameters**:
  - `search`: 검색어 (String)
  - `category`: 카테고리 코드 (0:전체, 1:프론트, 2:백, 3:DB)
  - `level`: 난이도 코드 (0:전체, 1:초급, 2:중급, 3:고급)
  - `order`: 정렬 코드 (0:작성순, 1:난이도↑, 2:난이도↓, 3:인원↑, 4:인원↓)
- **Response**: `JSON Array (List<Subject>)`
