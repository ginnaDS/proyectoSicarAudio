/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sicaraudiopro.controller;

import com.sicaraudiopro.EJB.RolFacadeLocal;
import com.sicaraudiopro.EJB.UsuarioFacadeLocal;
import com.sicaraudiopro.model.Rol;
import com.sicaraudiopro.model.Usuario;
import java.io.Serializable;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.view.ViewScoped;
import javax.inject.Inject;
import javax.inject.Named;

/**
 *
 * @author ginna
 */
@Named
@ViewScoped
public class usuarioController implements Serializable{
    @EJB
    private UsuarioFacadeLocal ufl;
    @Inject
    private Usuario us;
    private List<Usuario> user;
    
    @PostConstruct
    public void init(){
        us = new Usuario();
        user=ufl.findAll();
    }

    public List<Usuario> getUser() {
        return user;
    }

    public void setUser(List<Usuario> user) {
        this.user = user;
    }
    
    public UsuarioFacadeLocal getUfl() {
        return ufl;
    }

    public void setUfl(UsuarioFacadeLocal ufl) {
        this.ufl = ufl;
    }

    public Usuario getUs() {
        return us;
    }

    public void setUs(Usuario us) {
        this.us = us;
    }

    public void crear(){
        ufl.create(us);
    }
    
    
}
