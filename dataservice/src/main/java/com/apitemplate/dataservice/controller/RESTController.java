package com.apitemplate.dataservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
class FooController {

//    @Autowired
//    private IFooService service;

    @GetMapping
    public String[] findAll() {
        String[] response = {"get", "mapping", "find", "all"};
//        return service.findAll();
        return response;
    }

    @GetMapping(value = "/{id}")
    public String findById(@PathVariable("id") Long id) {
//        return RestPreconditions.checkFound(service.findById(id));
        return "get by Id reached : " + id;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public String create(@RequestBody String resource) {
//        Preconditions.checkNotNull(resource);
//        return service.create(resource);
        return "postMap create reached : " + resource;
    }

    @PutMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void update(@PathVariable( "id" ) Long id, @RequestBody String resource) {
//        Preconditions.checkNotNull(resource);
//        RestPreconditions.checkNotNull(service.getById(resource.getId()));
//        service.update(resource);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable("id") Long id) {
//        service.deleteById(id);
    }

}