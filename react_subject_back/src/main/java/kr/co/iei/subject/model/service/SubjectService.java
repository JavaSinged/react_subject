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

    public List<Subject> selectSubjectList(Map<String, Object> filterMap) {
        return subjectDao.selectSubjectList(filterMap);
    }
}