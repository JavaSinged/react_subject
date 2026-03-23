# 📚 강의 목록 관리 시스템 (Lecture List System)

React와 Spring Boot를 연동한 강의 필터링 및 정렬 시스템입니다.

## 🛠️ 기술 스택

- **Frontend**: React, Axios, CSS Modules
- **Backend**: Spring Boot, MyBatis
- **Database**: SQL Mapper 기반 (Oracle/MySQL)

## ✨ 주요 기능

- **통합 검색**: 강의명으로 실시간 검색 가능 (대소문자 무시)
- **카테고리 필터**: 프론트엔드, 백엔드, DB 등 과목별 분류
- **스마트 정렬**:
  - 난이도순 (낮은순/높은순)
  - 수강인원순 (많은순/적은순)
  - 최신순 (기본값)
- **검색 조건 초기화**: '초기화' 버튼 클릭 시 모든 필터와 검색어가 기본 상태로 복구

## 📂 폴더 구조

- `App.jsx`: 메인 상태 관리 및 API 통신 로직
- `SubjectList.jsx`: 강의 목록 테이블 렌더링 컴포넌트
- `App.module.css`: 검색바 및 레이아웃 디자인
- `SubjectList.module.css`: 테이블 및 카테고리 배지 디자인
