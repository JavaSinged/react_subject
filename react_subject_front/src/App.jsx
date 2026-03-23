import styles from './App.module.css';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import SubjectList from './component/SubjectList';

function App() {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState(0);
  const [level, setLevel] = useState(0);
  const [order, setOrder] = useState(0);
  const [subjectList, setSubjectList] = useState(null);

  const Search = () => {
    axios
      .get(`${import.meta.env.VITE_BACKSERVER}/subjects`, {
        params: {
          search: searchText,
          category: category,
          level: level,
          order: order,
        },
      })
      .then((res) => setSubjectList(res.data))
      .catch((err) => console.log('데이터를 불러오는데 실패했습니다.', err));
  };

  useEffect(() => {
    Search();
  }, [category, level, order]);

  useEffect(() => {
    if (searchText === '') {
      Search();
    }
  }, [searchText]);

  const Reset = () => {
    setSearchText('');
    setCategory(0);
    setLevel(0);
    setOrder(0);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>강의 목록</h1>
      </header>

      <div className={styles.search_bar}>
        <div className={styles.filter_wrap}>
          <select
            value={category}
            onChange={(e) => setCategory(Number(e.target.value))}
          >
            <option value="0">전체 카테고리</option>
            <option value="1">프론트엔드</option>
            <option value="2">백엔드</option>
            <option value="3">DB</option>
          </select>

          <select
            value={order}
            onChange={(e) => setOrder(Number(e.target.value))}
          >
            <option value="0">최신 등록순</option>
            <option value="1">난이도 낮은순</option>
            <option value="2">난이도 높은순</option>
            <option value="3">수강인원 많은순</option>
            <option value="4">수강인원 적은순</option>
          </select>
        </div>

        <form
          className={styles.search_wrap}
          onSubmit={(e) => {
            e.preventDefault();
            Search();
          }}
          onReset={(e) => {
            e.preventDefault();
            Reset();
          }}
        >
          <input
            className={styles.search_text}
            type="text"
            placeholder="강의명을 입력하세요"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <input className={styles.submit_btn} type="submit" value="검색" />
          <input className={styles.reset_btn} type="reset" value="초기화" />
        </form>
      </div>

      <SubjectList subjectList={subjectList} />
    </div>
  );
}

export default App;
