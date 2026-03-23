package kr.co.iei.subject.controller;

import kr.co.iei.subject.model.service.SubjectService;
import kr.co.iei.subject.model.vo.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("/subjects")
public class SubjectController {

    @Autowired
    private SubjectService subjectService;

    @GetMapping
    public ResponseEntity<?> getSubjects(
            // 1. 검색어 (없으면 빈 문자열 -> 모든 강의 조회)
            @RequestParam(value = "search", required = false, defaultValue = "") String search,

            // 2. 카테고리 (0: 전체, 1: 프론트엔드, 2: 백엔드, 3: DB)
            @RequestParam(value = "category", required = false, defaultValue = "0") int category,

            // 3. 난이도 (0: 전체, 1: 초급, 2: 중급, 3: 고급)
            @RequestParam(value = "level", required = false, defaultValue = "0") int level,

            // 4. 정렬 (0: 작성순, 1: 난이도 ASC, 2: 난이도 DESC, 3: 인원 DESC, 4: 인원 ASC)
            @RequestParam(value = "order", required = false, defaultValue = "0") int order
    ) {
        Map<String, Object> filterMap = new HashMap<>();
        filterMap.put("search", search);
        filterMap.put("category", category);
        filterMap.put("level", level);
        filterMap.put("order", order);

        List<Subject> list = subjectService.selectSubjectList(filterMap);

        return ResponseEntity.ok(list);
    }
}


