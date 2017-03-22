/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sicaraudiopro.controller;

import com.sicaraudiopro.EJB.UsuarioFacadeLocal;
import com.sicaraudiopro.model.Usuario;
import java.io.Serializable;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.faces.view.ViewScoped;
import javax.inject.Inject;
import javax.inject.Named;

/**
 *
 * @author ginna
 */
@Named
@ViewScoped
public class indexController implements Serializable{
    @EJB
    private UsuarioFacadeLocal ufl;
    
    @Inject
    private Usuario u;

    public UsuarioFacadeLocal getUfl() {
        return ufl;
    }

    public void setUfl(UsuarioFacadeLocal ufl) {
        this.ufl = ufl;
    }

    public Usuario getU() {
        return u;
    }

    public void setU(Usuario u) {
        this.u = u;
    }
    
    public String iniciarSesion(){
        Usuario us;
        String redireccion=null;
        try {
            us = ufl.iniciarSesion(u);
            System.out.println("Iniciar");
            if (us!=null) {
                 FacesContext.getCurrentInstance().getExternalContext().getSessionMap().put("uss", u);
              redireccion="/protected/principal? faces-redirect=true";
            }else{
                 FacesContext.getCurrentInstance().addMessage(null, new FacesMessage(FacesMessage.SEVERITY_FATAL,
                        "Aviso", "Usuario o contraseña incorrecta"));
            }
        } catch (Exception e) {
             FacesContext.getCurrentInstance().addMessage(null, new FacesMessage(FacesMessage.SEVERITY_FATAL,
                    "Aviso","Error "+e.getMessage()));
        }return redireccion;
    }
}
