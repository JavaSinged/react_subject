package kr.co.iei.subject.model.service;

import kr.co.iei.subject.model.dao.SubjectDao;
import kr.co.iei.subject.model.vo.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class SubjectService {

    @Autowired
    private SubjectDao subjectDao;

    /**
     * 필터링 및 검색 조건이 포함된 강의 목록 조회
     * @param filterMap {search, category, level, order} 정보가 담긴 맵
     * @return 필터링된 강의 리스트
     */
    public List<Subject> selectSubjectList(Map<String, Object> filterMap) {
        // 별도의 가공 로직이 필요하다면 여기서 처리합니다.
        // 현재는 단순히 DAO로 데이터를 넘겨주는 역할입니다.
        return subjectDao.selectSubjectList(filterMap);
    }
}